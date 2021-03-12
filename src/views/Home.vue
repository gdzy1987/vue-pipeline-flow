<template>
  <div class="home">
    <div class="pipeline-flow" ref="pipelineFlow">
      <div class="sidebar">
        <div class="header">源</div>
        <div class="source">
          <div class="item">
            <div class="card">
               <div class="left">
                <img src="./svg/git.svg">
              </div>
              <div class="center">
                <div class="at-title">devops-nezha-ui</div>
              </div>
            </div>
            <div class="branch">
              <div class="at-title">
                master <a-icon type="branches" /> &nbsp; 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="flow-groups " ref="flowGroups">
          <div class="splitline-and-nodes" v-for="(item,index) in data" :key="item.uid"  >
            <div class="flow-group splitline">
              <div class="button" title="添加新的阶段" >
                <div class="circle-plus-btn" @click="addStage(index)"> + </div>
              </div>
            </div>
            <div class="flow-group editable" @mousemove="flowGroupMouseMove(item)" @mouseleave="flowGroupMouseLeave(item)">
              <div class="group-head">
                阶段{{index + 1}}<a-icon @click="deleteStage(index)" class="delete-flow-icon" title="删除" type="delete"/>
              </div>
              <div class="stages">
                <div class="container" v-for="(c_item,c_index) in item.nodes" :key="'two'+c_index">
                  <div class="tasks-container">
                    <div class="action" @click="changeActionType(c_item)">
                      <a-tooltip :title="c_item.auto ? '自动触发': '手动触发'">
                        <a-icon v-if="c_item.auto" type="thunderbolt" theme="filled" style="color:#1890ff"/>
                        <a-icon v-else type="thunderbolt" />
                      </a-tooltip>
                    </div>
                    <div class="flow-job flow-job-capsule" v-for="(task) in c_item" :key="task.uid" @mousemove="nodeMouseMove(c_item)" @mouseleave="nodeMouseLeave(c_item)">
                      
                      <div class="extra-pre">
                         <div class="mini-btn">
                          <span>+</span>
                        </div>
                      </div>

                      <div class="content" >
                        <div class="component-name" >
                          <img src="./svg/scan.svg"/>
                          {{task.name}}
                        </div>

                        <div class="extra-right">
                          <!-- <div class="extra" v-if="c_item.node_hover" @click="deleteNode(index,c_index)">
                            <a-icon type="minus-circle" theme="filled" class="extra-icon"/>&nbsp;&nbsp;
                          </div> -->
                        </div>
                      </div>

                      <div class="extra-next">
                        <div class="mini-btn">
                          <span>+</span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div class="container add-stage-container" :class="{'render-blue-border':item.btn_hover}" v-if="item.flow_hover" >
                  <div class="tasks-container" style="padding-left:100px">
                    <div class="flow-job plusbtn" @click="addTask(index)" @mousemove="addTaskMouseMove(item)" @mouseleave="addTaskMouseLeave(item)">
                      <div class="component-name">
                        <a-icon type="plus-circle" theme="filled" style="font-size:16px;vertical-align: sub;margin-right:5px"/>&nbsp;&nbsp;
                        并行任务
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="flow-group splitline">
              <div class="button"> </div>
            </div>
          <div class="flow-group flow-group-create">
            <div class="group-head">
              新阶段
            </div>
            <div class="stages" id="pToShow">
              <div class="container">
                <div class="tasks-container">
                  <div class="flow-job plusbtn" @click="addStage(-1)">
                      <div class="name">
                        <a-icon type="plus-circle" theme="filled" style="font-size:16px;vertical-align: sub;margin-right:5px"/>&nbsp;
                         新的任务
                      </div>
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
          uid:"q1",
          flow_hover:false,
          btn_hover:false,
          nodes:[
            [
              {name:"node构建node构建node构建node构建",uid:"c1",node_hover:false,auto:true},
              {name:"node555345",uid:"c11",node_hover:false,auto:true}
            ],
          ]
        },
        {
          uid:"q2",
          flow_hover:false,
          btn_hover:false,
          nodes:[
            [{name:"单元测试",uid:"c2",node_hover:false,auto:true}],
            [{name:"代码扫描",uid:"c3",node_hover:false,auto:true}]
          ]
        },
        {
          uid:"q3",
          flow_hover:false,
          btn_hover:false,
          nodes:[
            [{name:"镜像部署",uid:"c4",node_hover:false,auto:true}],
          ]
        },
      ]
    }
  },
  methods:{
    //删除节点
    deleteNode(index,c_index){
      const nodeLength = this.data[index].nodes.length
      if(c_index === 0 && nodeLength === 1 ){
        this.data.splice(index,1)
      }else{
        this.data[index].nodes.splice(c_index,1)
      }
    },
    //鼠标移入节点，展示删除按钮
    nodeMouseMove(item){
      item.node_hover = true
      this.$forceUpdate()
    },
    //鼠标移出节点，不展示删除按钮
    nodeMouseLeave(item){
      item.node_hover = false
      this.$forceUpdate()
    },
    // 鼠标移入区域，展示按钮
    flowGroupMouseMove(item){
      item.flow_hover = true
    },
    flowGroupMouseLeave(item){
      item.flow_hover = false
    },
    // 鼠标移入按钮，颜色高亮
    addTaskMouseMove(item){
      item.btn_hover = true
    },
    addTaskMouseLeave(item){
      item.btn_hover = false
    },
    // 变更触发方式
    changeActionType(item){
      item.auto = !item.auto
      this.$forceUpdate()
    },
    // 添加步骤
    addStage(index){
      const uuid = this.uid()
      const obj = {
        uid:"q1"+ uuid,
        flow_hover:false,
        btn_hover:false,
        nodes:[[
          {name:"任务" + uuid,uid:"c1"+ uuid,auto:true},
        ]]
      }
      if(index == -1){
        this.data.push(obj)
        setTimeout(()=>{
          const x = this.$refs['flowGroups'].clientWidth
          this.$refs['pipelineFlow'].scrollTo(x,0)
        },500)
      }else{
        this.data.splice(index,0,obj)
      }
  
     
    },
    // 删除不走
    deleteStage(index){
      this.data.splice(index,1)
    },
    // 添加并行任务
    addTask(index,c_index){
      const uuid = this.uid()
      const obj = [{ name:"Task" + uuid, uid:"c2"+ uuid,auto:true}]
      this.data[index].nodes.push(obj)
    },
    uid() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
  }
}
</script>

<style lang="less" scoped>
.at-title{
  direction: rtl;
  text-align: left;
  height: 20px;
  font-size: 14px;
}
.delete-flow-icon{
  margin-left:5px;
  cursor: pointer;
}
.delete-flow-icon:hover{
  color:#ff4d4f;
}
.pipeline-flow{
  font-size: 13px;
  color:#666;
  display: flex;
  overflow-x: auto;
  height: 100vh;
  box-sizing: border-box;
  background: #f0f0f0;
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
          .container:before{
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
          margin-bottom: 100px;
          .container{
            position: relative;
            .tasks-container{
              display: flex;
              z-index: 1;
              margin: 0 50px;
              .plusbtn{
                &:hover{
                  background: #fff;
                  color: #1b9aee;
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
              .action{
                box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
                width: 40px;
                margin: 10px 14px 10px 10px;
                background: #fff;
                border: 1px solid #e5e5e5;
                border-radius: 20px;
                height: 40px;
                font-size: 17px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                cursor: pointer;
              }
              .flow-job{
                z-index: 1;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 10px 0;
                transition: all .2s ease-in-out;
                
                .mini-btn{
                  width: 18px;
                  height: 18px;
                  display: none;
                  border-radius: 50%;
                  color: #fff;
                  text-align: center;
                  background-color: transparent;
                  cursor: pointer;
                  overflow: hidden;
                  font-size: 20px;
                  line-height: 21px;
                  span{
                    position: relative;
                    left: 0.8px;
                  }
                } 
                .extra-pre{
                  width: 20px;
                  height: 20px;
                  background:transparent;
                  border-radius: 50%;
                  margin-right: 15px;
                  box-sizing: border-box;
                }
                .extra-next{
                  width: 20px;
                  height: 20px;
                  margin-left: 15px;
                  border-radius: 50%;
                  box-sizing: border-box;
                  
                }
                .content{
                  box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
                  min-width: 130px;
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
                    img{
                      width: 24px;
                      height: 24px;
                      margin-right: 8px;
                    }
                  }
                }
                .extra-right{
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  position: relative;
                  right: -13px;
                  margin-top: -2px;
                  .extra::before{
                    content: "";
                    position: absolute;
                    width: 16px;
                    // border-top: 1px solid #ff4d4f;
                    top: 50%;
                    margin-top: -1px;
                    right: 18px;
                  }
                  .extra{
                    width: 20px;
                    // position: absolute;
                    right: -22px;
                    cursor: pointer;
                    .extra-icon{
                      font-size:16px;
                      vertical-align: sub;
                      margin-right:5px;
                      color: #999;
                      &:hover{
                        color: #ff4d4f;
                      }
                      
                    }
                  }
                }
              }
              .flow-job-capsule:hover{
                .content{
                  border: 1px solid #1b9aee;
                }
                .mini-btn{
                  display: block;
                }
                .extra-pre{
                  background:#1b9aee;
                }
                .extra-next{
                  background:#1b9aee;
                }
                .extra-pre:hover{
                  background:#145b95;
                }
                .extra-next:hover{
                  background:#145b95;
                }
                .extra-pre::before{
                  left: 18px;
                  content: "";
                  position: absolute;
                  width: 16px;
                  border-top: 1px solid #1b9aee;
                  top: 50%;
                  margin-top: -1px;
                }
                .extra-next::before{
                  right: 18px;
                  content: "";
                  position: absolute;
                  width: 16px;
                  border-top: 1px solid #1b9aee;
                  top: 50%;
                  margin-top: -1px;
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
          .render-blue-border:before{
            border-color: #1b9aee!important;
          }
        }
      }
      .splitline-and-nodes{
        display:inline-block;
        height:100%
      }
      .splitline-and-nodes:first-child{
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
          .circle-plus-btn{
            width: 20px;
            height: 20px;
            color:#fff;
            background-color: #666;
            border-radius: 10px;
            position: absolute;
            top: 96px;
            margin-left: 15px;
            margin-right: 5px;
            z-index: 2;
            font-size:18px;
            line-height: 21px;
          }
          .circle-plus-btn:hover{
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
          top: 107px;
        }
      }
    }
  }
}

</style>
