<template>
  <div class="container">
   
    <div align="left">
    <div align="right">

    <b-button v-b-toggle.sidebar-footer>Menu</b-button> </div>
      
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto"></strong>
        <b-button size="sm" @click="hide">Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
           <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Dashboard</b-nav-item>
              <b-nav-item active @click="hide">Profile Admin</b-nav-item>
              <b-nav-item href="/register" @click="hide">Register User</b-nav-item>
              <b-nav-item href="/applyLeave" @click="hide">Apply Leave</b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
    </div>
<br>
                <div class="page-breadcrumb">
                    <nav aria-label="breadcrumb">
                         <ol class="breadcrumb">
                              <li class="breadcrumb-item active" aria-current="page">Apply leave</li>
                         </ol>
                    </nav>
             </div>
                      

              <b-row class="mt-5 d-flex justify-content-center">
              <b-col cols="6">
                <b-card align="left" bg-variant="grey" text-variant="black" header="Form Apply Leave">
                    <!-- <h2>Register User</h2> -->
                <form>
                  <div class="form-group">
                    <b-input-group>
                        <b-form-select 
							 v-model="selected" 
                             :options="['Annual Leave', 'Birthday']"
						>
						</b-form-select>
                    </b-input-group>
                    </div>
                    <div class="form-group">
                    <b-input-group>
                          <b-form-textarea id="textarea"
                            v-model="form.description"
                            placeholder="Description.."
                            rows="3" max-rows="3">
                          </b-form-textarea>
                    </b-input-group>
                    </div>
                    <div class="form-group">
                    <b-input-group>
                         <label for="example-datepicker">From</label>
                        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                        <!-- <p>Value: '{{ value }}'</p> -->
                         <label for="example-datepicker">To</label>
                        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                        <!-- <p>Value: '{{ value }}'</p> -->
                    </b-input-group>
                    </div>
                          <b-button block variant="primary" type="submit"  @click="onHandLeAdd()" >Apply Leave</b-button>
                      <br>
                    
                  </form>
                </b-card>
              </b-col>
          

            <!-- <b-row class="mt-5 d-flex justify-content-center"> -->
              <b-col cols="6">
                <b-card align="left" header="List of Leave" bg-variant="grey" text-variant="black"
              >
                <form   v-for="(user) in users"
                :key = "user.uid"> 
                  <b-row>
                    <b-col align="left"> {{ user.desc }} </b-col>
                    <b-col align="left">   {{user.uname }} </b-col>
                      <b-col align="left">   {{user.email }} </b-col>
                    <b-col align="right">  
                    <b-btn variant="info"  > 
                    <span class="fa fa-edit"></span>
                    </b-btn>
                    <b-btn variant="danger" >
                    <span class="fa fa-trash"></span>
                    </b-btn>
                    </b-col>
                  </b-row>
                  </form>
                </b-card>
              </b-col>
              </b-row>
            <!-- </b-row> -->
  </div>
</template>

<script>
export default {
   data(){
     return{
       users:[],
       form: {
          typeLeave:'',
          desc: '',
          dateFfrom:'',
          dateTo:'',
       },
      
     }
   },
    mounted(){
          this.getUser() //call back method todos
      },

       methods: {
            getUser(){
                  this.$http.get('http://localhost:3000/leave')
                      .then(res => {
                          this.users = res.data
                      })
            },
            onHandLeAdd(){
              this.$http.post('http://localhost:3000/leave', this.form)
                                  .then(() => {
                                      this.form ={
                                        typeLeave:'',
                                        desc: '',
                                        dateFfrom:'',
                                        dateTo:'',
                                      }
                                    this.getUser()
                                  })  
            },
            onHandLeUpdate(){
              this.$http.patch(`http://localhost:3000/leave/${this.form.uid}`, this.form)
                                  .then(() => {
                                      this.form ={
                                       typeLeave:'',
                                        desc: '',
                                        dateFfrom:'',
                                        dateTo:'',
                                      }
                                    this.getUser()
                                  })  
            },
            onHandLeClickDelete(id){
              this.$http.delete(`http://localhost:3000/leave/${uid}`) 
                              .then(() => {
                                this.form ={
                                       typeLeave:'',
                                       desc: '',
                                        dateFfrom:'',
                                        dateTo:'',
                                }
                                    this.getUser()
                                  })               
            },
            onHandLeClickUpdate(user){
            this.form = user
            this.getUser()         
            },
      },
}
</script>