<template>
    <div class="container">
        <app-progress :quoteCount="this.quotes.length" :maxQuotes="maxQuotes"></app-progress>
        <app-new-qoute @addQuote='newQuote'></app-new-qoute>
        <app-quotes-grid :quotes='quotes' @deleteQuote='deleteQuote'></app-quotes-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuotesGrid from './components/QuotesGrid.vue';
    import NewQuote from './components/NewQuote.vue'
    import ProgressBar from './components/ProgressBar.vue'

    export default {
        data: function() {
            return {
                quotes:[
                    'The first simple quote'
                ],
                maxQuotes: 10
            }
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length>=10){
                    return alert('Please delete anyone quote first!');
                }
                this.quotes.push(quote)
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }

        },
        components:{
            appQuotesGrid: QuotesGrid,
            appNewQoute: NewQuote,
            appProgress: ProgressBar
        }
    }
</script>

<style>
</style>
