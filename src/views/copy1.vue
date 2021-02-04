<template>
  <div class="home">
    <div class="pipeline-flow">
      <div class="sidebar">
        <div class="header">源</div>
        <div class="source">
          <div class="item">
            <div class="card">
               <div class="left">
                <img src="https://img.alicdn.com/tfs/TB12kn0r8v0gK0jSZKbXXbK2FXa-80-80.png">
              </div>
              <div class="center">
                <div class="at-title">toob-gnirps/elpmaxe-wolf</div>
              </div>
            </div>
            <div class="branch">
              <div class="at-title">
                master
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="flow-groups">
          <div class="flow-group splitline">
            <div class="button">
              <div class="self-btn">
                  +
              </div>
            </div>
          </div>
          <div class="flow-group editable">
            <div class="group-head">
              测试
            </div>
            <div class="stages">
              <div class="container">
                <div class="tasks-container">
                  <div class="flow-job">
                    <div class="content">
                      <div class="component-name"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="tasks-container">
                  <div class="flow-job">
                    <div class="content">
                      <div class="component-name"></div>
                    </div>
                  </div>
                </div>
              </div>
               <div class="container add-stage-container">
                <div class="tasks-container">
                  <div class="flow-job plusbtn">
                      <div class="component-name">并行任务</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flow-group splitline">
            <div class="button">
              <div class="self-btn">
                  +
              </div>
            </div>
          </div>
          <div class="flow-group editable">
            <div class="group-head">
              测试
            </div>
            <div class="stages">
              <div class="container">
                <div class="tasks-container">
                  <div class="flow-job">
                    <div class="content">
                      <div class="component-name"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flow-group splitline">
            <div class="button">
              <div class="self-btn">
                  +
              </div>
            </div>
          </div>
          <div class="flow-group flow-group-create">
            <div class="group-head">
              测试
            </div>
            <div class="stages">
              <div class="container add-stage-container">
                <div class="tasks-container">
                  <div class="flow-job plusbtn">
                      <div class="name">新的任务</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      data:[
        {
          nodes:[
            {name:"node构建"},
          ]
        },
        {
          nodes:[
            {name:"单元测试"},
            {name:"代码扫描"}
          ]
        },
        {
          nodes:[
            {name:"镜像部署"},
          ]
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.at-title{
  direction: rtl;
  text-align: left;
  height: 20px;
}
.pipeline-flow{
  font-size: 13px;
  color:#666;
  display: flex;
  overflow-x: auto;
  height: 100vh;
  box-sizing: border-box;
  .sidebar{
    display: inline-block;
    min-width: 300px;
    max-width: 300px;
    max-height: 100vh;
    vertical-align: top;
    overflow-y: auto;
    background: #f0f0f0;
    padding: 19px;
    box-sizing: border-box;
    .header{
      font-size: 14px;
      color: #8c8c8c;
      display: flex;
      align-items: center;
    }
    .source{
      width: 100%;
      height: auto;
      margin-top: 46px;
      .item{
        transition: all .218s ease-in;
        z-index: 100;
        position: relative;
        margin-bottom: 26px;
        overflow: hidden;
        .card{
          height: 40px;
          width: 100%;
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          display: flex;
          box-sizing: border-box;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 5px;
          cursor: pointer;
          background: #fff;
          box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
          transition: all .218s ease-in;
          overflow: hidden;
          .left{
            border-radius: 100%;
            width: 30px;
            min-width: 30px;
            height: 30px;
            overflow: hidden;
            img{
              width: 30px;
            }
          }
          .center{
            margin-left: 12px;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            color: #262626;
            overflow: hidden;
            margin-right: 6px;
          }
          .right{

          }
        }
        .branch{
          position: relative;
          color: #262626;
          width: 190px;
          margin: 20px 0 0 47px;
        }
        .branch::before{
          content: "";
          width: 21px;
          height: calc(100% + 13px);
          position: absolute;
          left: -28px;
          top: -20px;
          border-color: #d9d9d9;
          border-left: 1px solid;
          border-left-color: var(--gray-04,#d9d9d9);
          border-bottom: 1px solid;
          border-bottom-color: var(--gray-04,#d9d9d9);
          border-right-color: var(--gray-04,#d9d9d9);
          border-top-color: var(--gray-04,#d9d9d9);
          border-radius: 0 0 0 16px;
        }
      }
    }
  }
  .content{
    display: inline-block;
    max-height: 100vh;
    vertical-align: top;
    background: #f0f0f0;
    .flow-groups{
      box-sizing: border-box;
      position: relative;
      height: 100vh;
      white-space: nowrap;
      .flow-group-create{
        margin-right:30px;
        .stages{
          .add-stage-container:before{
            width: 50%!important;
          } 
          .container:before{
            border-left: none;
            border-right: none;
            border-radius: 0!important;
          }
        }
        .tasks-container{
          display: flex;
          z-index: 1;
          margin: 0 14px;
          .plusbtn{
            &:hover{
              border: 1px solid #1b9aee;
              background: #fff!important;
            }
            text-align: center;
            background: #f0f0f0;
            border: 1px solid #bfbfbf;
            border-radius: 20px;
            height: 40px;
            width: 127px;
            cursor: pointer;
            box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
            .name{
              text-align: center;
            }
          }
        }
      }
      .flow-group{
        padding-top: 19px;
        display: inline-block;
        vertical-align: top;
        height: 100%;
        overflow-y: auto;
        .group-head{
          padding: 0 20px;
          margin-bottom: 38px;
          font-size: 14px;
          color: #8c8c8c;
          display: flex;
          align-items: center;
        }
        .stages{
          box-sizing: border-box;
          .container{
            position: relative;
            .tasks-container{
              display: flex;
              z-index: 1;
              margin: 0 50px;
              justify-content: center;
              .plusbtn{
                &:hover{
                  background: #fff;
                  border: 1px solid #1b9aee;
                }
                text-align: center;
                background: #f0f0f0;
                border: 1px solid #bfbfbf;
                border-radius: 20px;
                height: 40px;
                width: 127px;
                cursor: pointer;
                box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
              }
              .flow-job{
                z-index: 1;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 10px 0;
                transition: all .2s ease-in-out;
                .content{
                  box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
                  min-width: 140px;
                  padding: 0 12px;
                  background: #fff;
                  border: 1px solid #e5e5e5;
                  border-radius: 20px;
                  height: 40px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                  .component-name{
                    display: inline-block;
                    color: #262626;
                    color: var(--gray-08,#262626);
                  }
                }
              }
            }
          }
          
          .container:before{
            content: "";
            position: absolute;
            top: -50%;
            left: 0;
            border-left: 1px solid #d9d9d9;
            border-right: 1px solid #d9d9d9;
            border-bottom: 1px solid #d9d9d9;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            transition: border .2s ease-in;
          }
          .container:first-child:before{
            border-left: none;
            border-right: none;
            border-radius: 0!important;
          }
          .container:last-child:before{
            border-radius: 0 0 20px 20px;
          }
        }
      }
      .splitline:first-child{
        .button::after{
           width: 24px!important;
           margin-left:0
        }
      }
      .splitline{
        height: 100vh;
        width: 48px;
        text-align: center;
        padding: 0 1px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        transform: rotate(0);
        .button{
          position: relative;
          z-index: 1;
          cursor: pointer;
          color: #8c8c8c;
          height: 100%;
          .self-btn{
            width: 20px;
            height: 20px;
            color:#fff;
            background-color: #666;
            border-radius: 10px;
            position: absolute;
            top: 96px;
            margin-left: 15px;
            z-index: 2;
            font-size:18px
          }
          .self-btn:hover{
            background-color: #1890ff;
          }
        }
        .button::before{
          content: "";
          height: 100%;
          border-left: 1px solid #d9d9d9;
          position: absolute;
        }
        .button::after{
          content: "";
          width: 48px;
          border-top: 1px solid #d9d9d9;
          position: absolute;
          margin-left: -24px;
          top: 105.5px;
        }
      }
    }
  }
}

</style>
