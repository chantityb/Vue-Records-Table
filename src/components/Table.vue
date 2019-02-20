<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search" placeholder="search records">
    <table class="table mt-4">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Web Address</th>
          <th scope="col">State</th>
        </tr>
      </thead>
      <tbody class="table-dark">
        <tr v-for="record in filteredRecords" :key="record.CHFNM">
          <td>{{record.CHFNM}}</td>
          <td>{{record.CHFTITLE}}</td>
          <td>{{record.GENTELE}}</td>
          <td>{{record.WEBADDR}}</td>
          <td>{{record.STABBR}}</td>
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
      records: [],
      search: ''
      }
    },

    created() {
    axios
      .get('https://inventory.data.gov/api/action/datastore_search?resource_id=38625c3d-5388-4c16-a30f-d105432553a4&q=KY&limit=120')
      .then(response => (this.records = response.data.result.records))
    },

    computed: {
      filteredRecords(){
        return this.records.filter((record) => {
          return record.CHFNM.match(this.search);
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



body {
  font-size: 14px;
  color: #444;
}

table {
  border-radius: 3px;
  background-color: #fff;
}

.table .thead-dark th {
  color: #fff;
  background-color: #ad0000;
  border-color: #ad0000;
}


</style>