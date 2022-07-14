export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '概述',
        children: [
          {
            title: 'TCC-TRANSACTION是什么?',
            link: '/zh-cn/docs/what-is-tcctransaction.html',
          },
          {
            title: '术语',
            link: '/zh-cn/docs/terminology.html',
          },
          {
            title: 'FAQ',
            link: '/zh-cn/docs/faq.html',
          }
        ],
      },
      {
        title: '使用手册',
        children: [
          {
            title: '快速开始',
            children: [
              {
                title: '示例说明',
                link: '/zh-cn/docs/tutorial/quickstart.html',
              },
              {
                title: 'local模式演示',
                link: '/zh-cn/docs/tutorial/quickstart/local-sample.html',
              },
              {
                title: 'server模式演示',
                link: '/zh-cn/docs/tutorial/quickstart/server-sample.html',
              }
            ],
          },
          {
            title: '参数配置',
            link: '/zh-cn/docs/tutorial/configurations.html',
          },
          {
            title: 'API支持',
            link: '/zh-cn/docs/tutorial/api.html',
          },
          {
            title: '存储模式',
            children: [
              {
                title: 'local模式',
                link: '/zh-cn/docs/tutorial/storagemode/local.html',
              },
              {
                title: 'server模式',
                link: '/zh-cn/docs/tutorial/storagemode/server.html',
              }
            ],
          },
          {
            title: '存储类型',
            children: [
              {
                title: 'remoting',
                link: '/zh-cn/docs/tutorial/storagetype/remoting.html',
              },
              {
                title: 'redis',
                link: '/zh-cn/docs/tutorial/storagetype/redis.html',
              },
              {
                title: 'redis-cluster',
                link: '/zh-cn/docs/tutorial/storagetype/redis-cluster.html',
              },
              {
                title: 'shard-redis',
                link: '/zh-cn/docs/tutorial/storagetype/shard-redis.html',
              },
              {
                title: 'jdbc',
                link: '/zh-cn/docs/tutorial/storagetype/jdbc.html',
              },
              {
                title: 'memory',
                link: '/zh-cn/docs/tutorial/storagetype/memory.html',
              },
              {
                title: 'rocksdb',
                link: '/zh-cn/docs/tutorial/storagetype/rocksdb.html',
              },
            ],
          },
          {
            title: 'RPC框架支持',
            children: [
              {
                title: '说明',
                link: '/zh-cn/docs/tutorial/rpc/index.html',
              },
              {
                title: 'dubbo',
                link: '/zh-cn/docs/tutorial/rpc/redis.html',
              },
              {
                title: 'openfeign',
                link: '/zh-cn/docs/tutorial/rpc/openfeign.html',
              },
              {
                title: 'grpc',
                link: '/zh-cn/docs/tutorial/rpc/grpc.html',
              }
            ],
          },
          {
            title: '注册中心支持',
            children: [
              {
                title: '说明',
                link: '/zh-cn/docs/tutorial/registry/index.html',
              },
              {
                title: 'direct',
                link: '/zh-cn/docs/tutorial/registry/direct.html',
              },
              {
                title: 'nacos',
                link: '/zh-cn/docs/tutorial/registry/nacos.html',
              },
              {
                title: 'zookeeper',
                link: '/zh-cn/docs/tutorial/registry/zookeeper.html',
              }
            ],
          }
        ],
      },
      {
        title: '运维指南',
        children: [
          {
            title: '版本升级指南',
            link: '/zh-cn/docs/ops/upgrade.html',
          },
          {
            title: 'server部署',
            children: [
              {
                title: '部署说明',
                link: '/zh-cn/docs/ops/tccserver/index.html',
              },
              {
                title: '单机部署',
                link: '/zh-cn/docs/ops/tccserver/deploy-alone.html',
              },
              {
                title: '集群部署',
                link: '/zh-cn/docs/ops/tccserver/deploy-cluster.html',
              },
            ]
          },
          {
            title: 'dashboad部署',
            children: [
              {
                title: '部署说明',
                link: '/zh-cn/docs/ops/dashboard/index.html',
              },
              {
                title: 'local模式部署',
                link: '/zh-cn/docs/ops/dashboard/deploy-local.html',
              },
              {
                title: 'server模式部署',
                link: '/zh-cn/docs/ops/dashboard/deploy-server.html',
              },
            ]
          },
        ],
      },
    ],
    barText: '文档',
  },
};
