<template>
    <div class="container">
        <form>
            <div class="row"  v-if="isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <form>
                        <app-name v-model="name"></app-name><br />
                        Mail: <input type="text" v-model="mail"><br />
                        Password: <input type="password" v-model="pass"><br />
                        Store Data: <label>
                            Yes: <input type="radio" value="Yes" v-model="store">
                            No: <input type="radio" value="No" v-model="store">
                        </label><br />
                        <button @click.prevent="submitted">Submit</button>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="!isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ name }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ pass }}</p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
    import Name from "./Name.vue"
    export default {
        data(){
            return {
                name:'Anton Shevelev',
                fName:'',
                lName:'',
                mail:'',
                pass:'',
                store: "Yes",
                isSubmitted: true
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = false;
            }
        },
        components: {
            appName: Name
        }
    }
</script>

<style>
</style>
