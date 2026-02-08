# Simple Logic: Extract props from React components to build JSON-LD
def generate_schema(page_title, description, url):
    schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": page_title,
        "description": description,
        "url": url,
        "publisher": { "@type": "Organization", "name": "YourBrand" }
    }
    return schema
