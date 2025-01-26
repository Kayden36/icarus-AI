import requests

# Base URL of the WordPress REST API
WP_API_URL = "https://vgridafrica.com/wp-json/wp/v2"

def get_solar_node_details(solar_node_id):
    """
    Fetches details for a specific solar_node from the WordPress REST API.

    Args:
        solar_node_id (int): The ID of the solar_node post to query.

    Returns:
        dict: The solar_node details as JSON, wrapped as account status.
    """
    try:
        # Build the endpoint URL for the solar_node
        endpoint = f"{WP_API_URL}/solar_node/{solar_node_id}"

        # Make the GET request to the WordPress REST API
        response = requests.get(endpoint)

        # Check the response status
        if response.status_code == 200:
            data = response.json()
            return {"account_status": data}  # Wrap the response as account status
        else:
            return {
                "error": True,
                "message": f"Failed to fetch data for solar_node ID '{solar_node_id}'.",
                "status_code": response.status_code,
                "details": response.text,
            }
    except requests.RequestException as e:
        return {"error": True, "message": f"Request failed: {e}"}

# Example usage
if __name__ == "__main__":
    # Get the solar_node ID from user input
    try:
        solar_node_id = int(input("Enter Solar Node ID (e.g., 45): "))
        account_status = get_solar_node_details(solar_node_id)

        # Print the resulting JSON
        if "error" not in account_status:
            print("Account Status Retrieved Successfully:")
            print(account_status)
        else:
            print("Error Fetching Account Status:")
            print(account_status)
    except ValueError:
        print("Invalid Solar Node ID. Please enter a numeric value.")
