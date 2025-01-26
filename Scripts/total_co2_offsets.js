<div class="wp-block-group" style="text-align: center;">
<div class="wp-block-button" style="text-align: right;"><a class="wp-block-button__link wp-element-button" href="https://vgridafrica.com/about">Live Total Solar Power</a> <!-- /wp:paragraph --></div>
<!-- /wp:group --> <script>
  // Fetch the Solar Node count using the REST API
  fetch('https://vgridafrica.com/wp-json/wp/v2/solar_node?per_page=1')
    .then(response => {
      const totalPosts = response.headers.get('X-WP-Total'); // Get the total post count from the header
      console.log('Total Solar Nodes:', totalPosts); // Logs the total number of solar_node posts

      // Define the energy capacity per node (25.6 Ah)
      const energyCapacityPerNode = 25.6; // in Ah

      // Calculate the total energy
      const totalEnergy = totalPosts * energyCapacityPerNode; // Total energy in Ah

      // Display the results
      document.getElementById('solar-node-count').innerText = `Node Count: ${totalPosts}`;
      document.getElementById('total-energy').innerText = `Total Energy: ${totalEnergy} Ah`;
    })
    .catch(error => {
      console.error('Error fetching SolarNode count:', error);
      document.getElementById('solar-node-count').innerText = 'Error fetching SolarNode count';
      document.getElementById('total-energy').innerText = 'Error calculating total energy';
    });
</script>
<p><!-- Place where you want the post count and energy to be displayed --></p>
<p id="solar-node-count" style="text-align: right;">Loading SolarNode count...</p>
<p id="total-energy" style="text-align: right;">Loading total energy...</p>
<script>
  // Fetch all solar_cluster posts using the REST API
  fetch('https://vgridafrica.com/wp-json/wp/v2/solar_cluster')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      let totalCapacity = 0;

      // Loop through each solar_cluster post and extract the capacity field
      data.forEach(post => {
        // Check if the post has the 'capacity' field in its ACF field group
        const capacity = post.acf ? parseFloat(post.acf.capacity) : 0;
        
        // Add the capacity to the total
        if (!isNaN(capacity)) {
          totalCapacity += capacity;
        }
      });

      // Display the results
      document.getElementById('solar-cluster-count').innerText = `Total Solar Clusters: ${data.length}`;
      document.getElementById('total-capacity').innerText = `Total Solar Capacity: ${totalCapacity} Ah`;
    })
    .catch(error => {
      console.error('Error fetching solar_cluster posts:', error);
      document.getElementById('solar-cluster-count').innerText = 'Error fetching Solar Clusters';
      document.getElementById('total-capacity').innerText = 'Error calculating total capacity';
    });
</script> <!-- HTML to display the results -->
<div>
<p id="solar-cluster-count" style="text-align: right;"><strong>Loading Solar Clusters...</strong></p>
<p id="total-capacity" style="text-align: right;"><strong>Loading Total Capacity...</strong></p>
</div>
<p style="text-align: right;"><strong><a href="https://vgridafrica.com/realtime-dashboard/?preview_id=334&amp;preview_nonce=f09e88fbbc&amp;_thumbnail_id=336&amp;preview=true">View Al​l Stats</a></strong></p>
<hr />
<p style="text-align: center;"> </p>
<p><script>
  // Fetch all solar_cluster posts using the REST API
  fetch('https://vgridafrica.com/wp-json/wp/v2/solar_cluster')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      let totalCapacityAh = 0;

      // Loop through each solar_cluster post and extract the capacity field
      data.forEach(post => {
        // Check if the post has the 'capacity' field in its ACF field group
        const capacity = post.acf ? parseFloat(post.acf.capacity) : 0;
        
        // Add the capacity to the total in Ah
        if (!isNaN(capacity)) {
          totalCapacityAh += capacity;
        }
      });

      // Carbon offset calculation: Assuming 1 kWh = 0.9 kg CO2 offset, and 1 Ah = (Capacity in kWh / 230V) * 1000
      const totalCapacitykWh = (totalCapacityAh * 230) / 1000;
      const carbonOffsetKg = totalCapacitykWh * 0.9; // Assuming 0.9 kg CO2 per kWh

      // Display the carbon offset result
      document.getElementById('carbon-offset').innerText = `Carbon Offset: ${carbonOffsetKg.toFixed(2)} kg CO2 per day`;
    })
    .catch(error => {
      console.error('Error fetching solar_cluster posts:', error);
      document.getElementById('carbon-offset').innerText = 'Error calculating carbon offset';
    });
</script></p>
<!-- HTML to display the carbon offset -->
<div>
<h6 id="carbon-offset" style="text-align: right;"><strong>Loading Carbon Offset...</strong></h6>
</div>

<h6 id="total-offsets" style="text-align: right;"><strong>Loading carbon offsets...</strong></h6>
<h2><script>
    document.addEventListener("DOMContentLoaded", function () {
        const apiUrl = "https://vgridafrica.com/wp-json/wp/v2/solar_node"; // REST API endpoint
        const offsetPerNode = 0.1536; // Offset per node in kg CO₂/day

        async function calculateTotalOffsets() {
            try {
                // Fetch the total count of solar_node posts
                const response = await fetch(`${apiUrl}?per_page=1`); // Fetch with per_page=1 for header count
                if (!response.ok) {
                    throw new Error("Failed to fetch node count.");
                }

                // Get total count from headers
                const totalNodes = parseInt(response.headers.get("X-WP-Total"), 10);

                if (isNaN(totalNodes)) {
                    throw new Error("Invalid node count received.");
                }

                // Calculate total offsets
                const totalOffsets = totalNodes * offsetPerNode;

                // Display result on the webpage
                const resultElement = document.getElementById("total-offsets");
                if (resultElement) {
                    resultElement.textContent = `Total Carbon Offsets: ${totalOffsets.toFixed(4)} kg CO₂/day (from ${totalNodes} nodes)`;
                }
            } catch (error) {
                console.error("Error calculating total offsets:", error.message);
            }
        }

        calculateTotalOffsets();
    });
</script></h2>
