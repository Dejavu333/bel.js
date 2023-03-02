const fs = require('fs');
const args = process.argv.slice(2);
const filename = args[0];

if (!filename) {
  console.log('Error: No filename specified');
  process.exit(1);
}

const wok = 
`<script>
/* behaviour, state */
</script>


<${filename}-wok>
<!-- structure -->
</${filename}-wok>


<style>
/* appearance */
</style>`;

fs.writeFileSync(`${filename}-wok.html`, wok, 'utf8');