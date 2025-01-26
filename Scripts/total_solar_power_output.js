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
