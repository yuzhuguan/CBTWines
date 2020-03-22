<template>
    <div class="ingre">
        <table>
            <tr>
                <td>
                    <h2 class="phoneSize">Ingredients Table</h2>
                </td>
            </tr>
        </table>
        <table class="ingreTable">
            <thead>
                <tr>
                    <th class="ingreTableNum">#Number</th>
                    <th class="ingreTableIngre">Ingredient</th>
                    <th class="ingreTableAmount">Amount</th>
                    <th class="ingreTableUnit">Unit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ingredient, index) in ingredients" :key="index">
                    <td class="ingreTableNum">&nbsp;{{index + 1}}</td>
                    <td class="ingreTableIngre">{{ingredients[index]}}</td>                
                    <td class="ingreTableAmount">{{amount[index]}}</td>
                    <td class="ingreTableUnit">{{unit[index]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ["ingredients", "amount", "unit"]
}
</script>

<style scoped>
.ingreTable {
    border-collapse: collapse;
    width: 100%
}

.ingreTable input{
    width: 100%;
}

.ingreTableNum, .ingreTableAmount, .ingreTableUnit {
    width: 10%;
    border: 1px solid lightgrey;
}

.ingreTableIngre {
    width: 70%;
    border: 1px solid lightgrey;
}

@media only screen and (max-width: 600px) {
    .ingreTableNum, .ingreTableAmount, .ingreTableUnit {
        width: 20%;
        border: 1px solid lightgrey;
    }

    .ingreTableIngre {
        width: 40%;
        border: 1px solid lightgrey;
    }
}
</style>