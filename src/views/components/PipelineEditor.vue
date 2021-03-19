<template>
  <div class="home">
    <div class="pipeline-flow" ref="pipelineFlow">
      <div class="sidebar">
        <div class="header">源</div>
        <div class="source">
          <div class="item" v-for="item in sourceList" :key="item.name">
            <div class="card">
               <div class="left">
                <img src="./svg/git.svg">
              </div>
              <div class="center">
                <div class="at-title">{{item.name}}</div>
              </div>
            </div>
            <div class="branch">
              <div class="at-title">
                {{item.branch}} <a-icon type="branches" /> &nbsp; 
              </div>
            </div>

          </div>

          <div class="add-source-btn">
             添加代码源
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
                    <div class="flow-job flow-job-capsule" v-for="(task,t_index) in c_item" :key="task.uid" @mousemove="nodeMouseMove(c_item)" @mouseleave="nodeMouseLeave(c_item)">
                      
                      <div class="extra-pre" @click="addPreNext('pre',index,c_index,t_index)">
                         <div class="mini-btn">
                          <span>+</span>
                        </div>
                      </div>

                      <div class="content " :class="task.error?'error':''">
                        <div class="component-name" >
                          <img src="./svg/scan.svg"/>
                          {{task.name}}
                        </div>

                        <div class="extra-right" v-show="task.error">
                          <div class="extra" @click="deleteNode(index,c_index)">
                            <a-icon type="exclamation-circle" theme="filled" class="extra-icon"/>&nbsp;&nbsp;
                          </div>
                        </div>
                      </div>

                      <div class="extra-next" @click="addPreNext('next',index,c_index,t_index)">
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
  name: 'PipelineEditor',
  components: {
  },
  data(){
    return{
      sourceList:[
        {
          name:"devops-ui",
          branch:"master"
        },
        {
          name:"devops-ui22",
          branch:"master"
        }
      ],
      data:[
        {
          uid:"q1",
          flow_hover:false,
          btn_hover:false,
          nodes:[
            [
              { name:"node构建node构建node构建node构建",uid:"c1", node_hover:false, auto:true,error:true },
              { name:"node555345",uid:"c11",node_hover:false,auto:true, error:false }
            ],
          ]
        },
        {
          uid:"q2",
          flow_hover:false,
          btn_hover:false,
          nodes:[
            [ { name:"单元测试",uid:"c2",node_hover:false,auto:true,error:false }],
            [ { name:"代码扫描",uid:"c3",node_hover:false,auto:true,error:true }]
          ]
        },
        {
          uid:"q3",
          flow_hover:false,
          btn_hover:false,
          nodes:[
            [{name:"镜像部署",uid:"c4",node_hover:false,auto:true,error:false}],
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
          {name:"任务" + uuid,uid:"c1"+ uuid,auto:true,error:false},
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
    //
    addPreNext(type,index,c_index,t_index){
      console.log(type,t_index,t_index-1)
      const uuid = this.uid()
      const obj = { name:"Task" + uuid, uid:"c2"+ uuid,auto:true,error:false}
      if(type === "pre"){
        this.data[index].nodes[c_index].splice(t_index,0,obj)
      }
      if(type === "next"){
        this.data[index].nodes[c_index].splice(t_index+1,0,obj)
      }

    },
    // 删除不走
    deleteStage(index){
      this.data.splice(index,1)
    },
    // 添加并行任务
    addTask(index,c_index){
      const uuid = this.uid()
      const obj = [{ name:"Task" + uuid, uid:"c2"+ uuid,auto:true,error:false}]
      this.data[index].nodes.push(obj)
    },
    uid() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
  }
}
</script>

<style lang="less" scoped>
@import url(./PipelineEditor.less);
</style>
