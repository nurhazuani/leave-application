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
              <b-nav-item href="/applyLeave" @click="hide">Register User</b-nav-item>
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
                                        <li class="breadcrumb-item active" aria-current="page">Register User</li>
                                    </ol>
                                </nav>
                            </div>
                      

              <b-row class="mt-5 d-flex justify-content-center">
              <b-col cols="6">
                <b-card align="left" bg-variant="grey" text-variant="black" header="Register User">
                    <!-- <h2>Register User</h2> -->
                <form>
                  <div class="form-group">
                    <b-input-group><input
                                 v-model="form.uid"
                                type="text"
                                class="form-control"
                                placeholder="No. staff..."
                                v-if="form.uid"
                                disabled
                                />
                                <input
                                 v-model="form.uid"
                                type="text"
                                class="form-control"
                                placeholder="No. staff..."
                                v-else
                                />
                    </b-input-group>
                    </div>
                    <div class="form-group">
                    <b-input-group><input
                                v-model="form.uname"
                                type="text"
                                class="form-control"
                                placeholder="Enter name..."
                                />
                    </b-input-group>
                    </div>
                    <div class="form-group">
                    <b-input-group><input
                                v-model="form.email"
                                type="text"
                                class="form-control"
                                placeholder="Enter email..."
                                />
                    </b-input-group>
                    </div>

                    <div class="form-group">
                    <b-input-group><input
                               v-model="form.password"
                                type="password"
                                class="form-control"
                                placeholder="Enter password..."
                                />
                    </b-input-group>
                    </div>

                    <div class="form-group">
                        <b-input-group>
                              <b-row>
                                    <b-col align="center">
                                    <b-form-radio-group
                                    class="pt-2"
                                    v-model="form.role"
                                    :options="['Employee', 'Admin']"
                                  
                                    ></b-form-radio-group>
                                        <!-- <div class="mt-3">Selected: <strong>{{ form.role }}</strong></div> -->
                                    </b-col>
                              </b-row>
                        </b-input-group>
                    </div>

                      <b-button block variant="info" type="submit" v-if="form.uid" @click="onHandLeUpdate()">Update</b-button>
                      <b-button block variant="outline-secondary" type="submit" v-if="form.uid" @click="onHandLeCancel()" >cancel</b-button>
                      <b-button block variant="primary" type="submit"  @click="onHandLeAdd()" v-else>Add User</b-button>
                      <br>
                    
                  </form>
                </b-card>
              </b-col>
          

            <!-- <b-row class="mt-5 d-flex justify-content-center"> -->
              <b-col cols="6">
                <b-card align="left" header="List of Employee" bg-variant="grey" text-variant="black"
              >
                <form   v-for="(user) in users"
                :key = "user.uid"> 
                  <b-row>
                    <b-col align="left"> {{ user.uid }} </b-col>
                    <b-col align="left">   {{user.uname }} </b-col>
                      <b-col align="left">   {{user.email }} </b-col>
                    <b-col align="right">  
                    <b-btn variant="info"   @click="onHandLeClickUpdate(user)" > 
                    <span class="fa fa-edit" ></span>
                    </b-btn>
                    <b-btn variant="danger"  @click="onHandLeClickDelete(user.uid)">
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
          uid:'',
          uname: '',
          email:'',
          password:'',
          role: '',
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
                                        uid:'',
                                        uname: '',
                                        email:'',
                                        password:'',
                                        role:''
                                      }
                                    this.getUser()
                                  })  
            },
            onHandLeUpdate(){
              this.$http.patch(`http://localhost:3000/leave/${this.form.uid}`, this.form)
                                  .then(() => {
                                      this.form ={
                                        uid:'',
                                        uname: '',
                                        email:'',
                                        password:'',
                                         role:''
                                      }
                                    this.getUser()
                                  })  
            },
            onHandLeClickDelete(uid){
              this.$http.delete(`http://localhost:3000/leave/${uid}`) 
                              .then(() => {
                                this.form ={
                                        uid:'',
                                        uname: '',
                                        email:'',
                                        password:'',
                                        role:''
                                }
                                    this.getUser()
                                  })               
            },
            onHandLeClickUpdate(user){
            this.form = user
            this.getUser()         
            },

            onHandLeCancel(){
                  
                                this.form ={
                                  title:'',
                                  description:''
                                }
                
          }
      },
      
 

}
</script>