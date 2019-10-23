<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

  @Component({
    components: {
      HelloWorld
    }
  })
export default class App extends Vue {
  created () {
    this.$agent.connect({
      // host: 'localhost',
      host: 'broker.orangepixel.hu',
      port: 8884,
      username: 'eexit',
      rejectUnauthorized: false,
      protocol: 'wss',
      password: 'Cirkusz1984',
      clientId: 'eexit_dashboard' + Math.random().toString(16).substr(2, 8),
      ca: '-----BEGIN CERTIFICATE-----\n' +
        'MIIEETCCAvmgAwIBAgIJAMWexhOpFp1IMA0GCSqGSIb3DQEBCwUAMIGeMQswCQYD\n' +
        'VQQGEwJIVTERMA8GA1UECAwIQnVkYXBlc3QxETAPBgNVBAcMCEJ1ZGFwZXN0MRQw\n' +
        'EgYDVQQKDAtPcmFuZ2VwaXhlbDEPMA0GA1UECwwGQnJva2VyMR4wHAYDVQQDDBVi\n' +
        'cm9rZXIub3JhbmdlcGl4ZWwuaHUxIjAgBgkqhkiG9w0BCQEWE2JlZG9tYXJjaUBn\n' +
        'bWFpbC5jb20wHhcNMTkxMDIyMTEwNjE5WhcNMjAxMDIxMTEwNjE5WjCBnjELMAkG\n' +
        'A1UEBhMCSFUxETAPBgNVBAgMCEJ1ZGFwZXN0MREwDwYDVQQHDAhCdWRhcGVzdDEU\n' +
        'MBIGA1UECgwLT3JhbmdlcGl4ZWwxDzANBgNVBAsMBkJyb2tlcjEeMBwGA1UEAwwV\n' +
        'YnJva2VyLm9yYW5nZXBpeGVsLmh1MSIwIAYJKoZIhvcNAQkBFhNiZWRvbWFyY2lA\n' +
        'Z21haWwuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwy2esUgl\n' +
        'rUo3E2pFuKbs7r1kGKvTkyUZ5wNUYDLB9/a4aTE8wr106wOQvcbSymnag8XCV9On\n' +
        '1tuFCfmsQrwje6YjMh/hJD/6orxX7q2MTJFiB9oMKUlrrALgdYFzN+kadW7OR519\n' +
        'H5ouzJH+ZAo8/rToj9mnpzQZO/h+RiA0TaDcOHmpBvFUTa2vP3mOqROVe16PuIGP\n' +
        'PmVK5sMXiz0Fz1Oz4bnqB21K8TpKSJI8BHwb2VyOK/n8ZZqxu/aXErfRSRQWUq4v\n' +
        'g3PK/dqlTyGw035gDW8CngHVAwOBvO5HJVsuWZE3EWlqI2Ci5ElorMB9/0NWKnh7\n' +
        'ZMi69ZeCS1BLcwIDAQABo1AwTjAdBgNVHQ4EFgQUNvySOOtrXLgz6LCQsdGfAV5A\n' +
        'I7owHwYDVR0jBBgwFoAUNvySOOtrXLgz6LCQsdGfAV5AI7owDAYDVR0TBAUwAwEB\n' +
        '/zANBgkqhkiG9w0BAQsFAAOCAQEAIY/bnLb5pReQshoFrJ66gCCA9IHw1qEpkS+/\n' +
        'peDvveH4iRQbPgEoLIBjEkgfLn9v/1aqwi2vK2BbRY0eI8bF3wfW3nbsBS/B4vKb\n' +
        'H6bpsHp4lWrp/wEbjvx5RnvQe02SjgqtstH3aQHIveUC2oRU12gc3G5cILLrkxm/\n' +
        'y+HuU9DH6L6Fj5c6zspOtphvUgDRwtFywKoJjB6bAIiC4IpFIZkqQvW+N1J32Z2d\n' +
        'lVw2NwBzyTIbT/Z4CUvPI/k1TpmGAIh4aQcCV3A1TovrvH4/fyfILbTm72U5Fc9R\n' +
        'CXUysIPTApyGQQz3nyU/m9/DN9zC6YlHFF+IEcLrOBu47BzNXQ==\n' +
        '-----END CERTIFICATE-----'
    })

    this.$agent.subscribe('#')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
