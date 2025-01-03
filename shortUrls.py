import requests
import re
import json
import os

# File paths
urls_file_path = "urls.js"
mappings_file_path = "url_mappings.json"

# Function to shorten a URL using the TinyURL API
def shorten_url(original_url):
    api_url = f"http://tinyurl.com/api-create.php?url={original_url}"
    response = requests.get(api_url)
    if response.status_code == 200:
        return response.text.strip()  # Shortened URL
    else:
        print(f"Error shortening URL: {response.status_code}, {response.text}")
        return None

# Load URL mappings from the mappings file
def load_mappings():
    if os.path.exists(mappings_file_path):
        with open(mappings_file_path, "r") as f:
            return json.load(f)
    return {}

# Save URL mappings to the mappings file
def save_mappings(mappings):
    with open(mappings_file_path, "w") as f:
        json.dump(mappings, f, indent=4)

# Shorten URLs and update the urls.js file
def shorten_urls():
    # Load existing URL mappings
    mappings = load_mappings()

    try:
        # Read the contents of the urls.js file
        with open(urls_file_path, "r") as f:
            data = f.read()
    except Exception as e:
        print(f"Error reading {urls_file_path}: {e}")
        return

    # Extract the URLs array from the contents of urls.js using regex
    match = re.search(r"let urls = (\[.*\]);", data, re.DOTALL)
    if not match:
        print("Error: Could not find the URLs array in urls.js.")
        return

    try:
        urls_array = eval(match.group(1))  # Convert the string array to a Python list
    except Exception as e:
        print(f"Error parsing URLs array: {e}")
        return

    # Shorten URLs
    shortened_urls = []
    for original_url in urls_array:
        if original_url not in mappings:
            short_url = shorten_url(original_url)
            if short_url:
                mappings[original_url] = short_url
        shortened_urls.append(mappings.get(original_url, original_url))  # Use the original if not found

    # Save the updated mappings to the mappings file
    save_mappings(mappings)

    # Replace the URLs array in the file with the shortened URLs
    updated_data = re.sub(
        r"let urls = \[.*\];",
        f"let urls = {json.dumps(shortened_urls, indent=4)};",
        data,
        flags=re.DOTALL,
    )

    # Write the updated content back to the urls.js file
    try:
        with open(urls_file_path, "w") as f:
            f.write(updated_data)
        print("URLs successfully shortened and updated in urls.js!")
    except Exception as e:
        print(f"Error writing to {urls_file_path}: {e}")

# Run the script
if __name__ == "__main__":
    shorten_urls()
