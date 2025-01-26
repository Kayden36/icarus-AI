import requests

# Base URL of the VGrid API endpoint
VGRID_API_URL = "https://vgridafrica.com/api/solar_node"

def get_data_by_msisdn(msisdn):
    """
    Makes a GET request to the VGrid API to fetch data for a specific MSISDN.

    Args:
        msisdn (str): The MSISDN (mobile number) to query.

    Returns:
        dict: The API response as a JSON object.
    """
    try:
        # API request
        response = requests.get(f"{VGRID_API_URL}/{msisdn}")

        # Check for successful response
        if response.status_code == 200:
            return response.json()
        else:
            return {
                "error": True,
                "message": f"Failed to fetch data. Status code: {response.status_code}",
                "details": response.text,
            }
    except requests.RequestException as e:
        return {"error": True, "message": f"Request failed: {e}"}

# Example usage
if __name__ == "__main__":
    # MSISDN to query
    msisdn = input("Enter MSISDN (e.g., 260977xxxxxx): ")
    result = get_data_by_msisdn(msisdn)

    if "error" not in result:
        print("VGrid Data Retrieved Successfully:")
        print(result)
    else:
        print("Error Fetching Data:")
        print(result)
