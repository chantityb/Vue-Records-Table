<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search" placeholder=" search records">
  
    <table class="table mt-4">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Web Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.CHFNM">
          <td>{{record.CHFNM}}</td>
          <td>{{record.CHFTITLE}}</td>
          <td>{{record.GENTELE}}</td>
          <td>{{record.WEBADDR}}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>


<script>
export default {
  name: 'Table',
  props: {
    msg: String
  },
  
  data() {
    return {
      records: []
      }
    },

    mounted() {
    axios
      .get('https://inventory.data.gov/api/action/datastore_search?resource_id=38625c3d-5388-4c16-a30f-d105432553a4&q=KY&limit=120')
      .then(response => (this.records = response.data.result.records))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
