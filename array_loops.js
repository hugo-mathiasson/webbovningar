//Uppgift 1
kk = ["item1", "item2", "item3"]

for (let i = 0; i < kk.length; i++)
{
    console.log(kk[i]);
}

//Uppgift 2
colors = ["färg1", "färg2", "färg3", "färg4", "färg5",]

for (let x of colors)
{
    console.log(x);
}

//Upggift 3
numbers = [1, 2, 3, 4]

function total(numbs)
{
    the_total = 0
    for (x of numbs)
    {
        the_total += x
    }
    return the_total
}
total(numbers)