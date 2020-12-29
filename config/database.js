module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        "uri":"mongodb://ahmed:ahmed123@strapicms-cluster-shard-00-00.htrap.mongodb.net:27017,strapicms-cluster-shard-00-01.htrap.mongodb.net:27017,strapicms-cluster-shard-00-02.htrap.mongodb.net:27017/strapijs-amp-articles-crud?ssl=true&replicaSet=atlas-adhl7b-shard-0&authSource=admin&retryWrites=true&w=majority"
      },
      options: {
        useNullAsDefault: true,
        "ssl":true
      },
    },
  },
});