
let newDate = document.querySelector(".date")
let newDate2 = document.querySelector(".date2")

// let today = new Date()
// newDate.innerHTML = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`
// newDate2.innerHTML = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`


document.getElementById("print").addEventListener("click", function(){
    document.querySelector("form").classList.add("hide")
    window.print()
    document.querySelector("form").classList.remove("hide")

})


// form
let nameValue = document.querySelector("input.name")
let addressValue = document.querySelector("input.address")
let recordValue1 = document.querySelector("input.record1")
let recordValue2 = document.querySelector("input.record2")
let recordValue3 = document.querySelector("input.record3")

let dayValue = document.querySelector("input.day")
let monthValue = document.querySelector("input.month")
let yearValue = document.querySelector("input.year")

let billNumberValue = document.querySelector("input.bill-number")
let detailsValue = document.querySelector("input.details")
let kgQuantituValue = document.querySelector("input.kg-quantity")
let kgPriceValue = document.querySelector("input.kg-price")
let arabicValue = document.querySelector("input.arabic")

//application
let personName = document.querySelector(".person .person-name")
let personAddress = document.querySelector(".person .person-address")
let personRecord1 = document.querySelector(".person .person-record .one")
let personRecord2 = document.querySelector(".person .person-record .two")
let personRecord3 = document.querySelector(".person .person-record .three")

let day = document.querySelector(".person .bill-date .one")
let month = document.querySelector(".person .bill-date .two")
let year = document.querySelector(".person .bill-date .three")

let day1 = document.querySelector(".bill-date1 .one")
let month1 = document.querySelector(".bill-date1 .two")
let year1 = document.querySelector(".bill-date1 .three")

let billNumber = document.getElementById("bill-number")
let details = document.querySelector("td.details")
let priceByLE = document.querySelector("td.price-by-le")
let kgPrice = document.querySelector("td.kg-price")
let kgQuantity = document.querySelector("td.kg-quantity")
let addedVAlue = document.querySelector("td.add-value")
let allPrice = document.querySelector("td.all-price")
let arabic = document.querySelector("td.arabic")




document.querySelector("form").addEventListener("keyup", function(){
    personName.innerHTML = nameValue.value
    personAddress.innerHTML = addressValue.value
    personRecord1.innerHTML = recordValue1.value
    personRecord2.innerHTML = recordValue2.value
    personRecord3.innerHTML = recordValue3.value

    day.innerHTML = dayValue.value
    month.innerHTML = monthValue.value
    year.innerHTML = yearValue.value

    day1.innerHTML = dayValue.value
    month1.innerHTML = monthValue.value
    year1.innerHTML = yearValue.value

    billNumber.innerHTML = billNumberValue.value
    details.innerHTML = detailsValue.value
    kgQuantity.innerHTML = kgQuantituValue.value
    kgPrice.innerHTML = kgPriceValue.value
    priceByLE.innerHTML = kgPriceValue.value * kgQuantituValue.value

    let addedVal = (kgPriceValue.value * kgQuantituValue.value * (14/100)).toFixed(2)
    
    addedVAlue.innerHTML = addedVal

    let a = parseInt(priceByLE.innerHTML)
    
    allPrice.innerHTML = `${(parseInt(a) + (parseInt(priceByLE.innerHTML) * (14/100))).toFixed(2) } `

    arabicValue.value = Number(allPrice.innerHTML).toFixed(2)

    main()
})


function main (){
    var fraction = Number(allPrice.innerHTML).toFixed(2).split(".");

    if (fraction.length == 2){
        arabic.innerHTML = `فقط و قدره ${tafqeet(fraction[0])} جنيها ${fraction[1] === "00" ?  "لا غير" : 
            fraction[1] === "10" ? `و ${tafqeet(fraction[1])} قروش لا غير` : 
            `و ${tafqeet(fraction[1])} قرشا لا غير`  
        }` 
    }

    // else if (fraction.length == 1){
    //     arabic.innerHTML = "فقط وقدره" + " " + tafqeet (fraction[0]) + " " + "جنيها لا غير";
    // }
}



function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
}
