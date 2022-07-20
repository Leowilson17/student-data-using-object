var table = document.querySelector('.table-class');
console.log(table);
var tableObject = [
    {
        img: 'pic',
        name: "Vimal",
        mobile: 8389289819,
        batch: 'FSD-10',
        git: [
            link = 'https://github.com/'
        ],
        referby: "Samy",
        location: 'Surandai',
        placement: 'Yes'
    },
    {
        img: 'pic',
        name: "Mari-selvam",
        mobile: 83892828319,
        batch: 'FSD-10',
        git: [
            link = "https://github.com/MARISELVAM1234/"
        ],
        referby: "Alphanse",
        location: 'Alangulam',
        placement: 'No'
    },
    {
        img: 'pic',
        name: "Leowilson",
        mobile: 7339212569,
        batch: 'FSD-10',
        git: [
            link = "https://github.com/Leowilson17"
        ],
        referby: "Samy",
        location: 'Surandai',
        placement: 'No'
    },
    {
        img: 'pic',
        name: "Selva Mariyappan",
        mobile: 8270056940,
        batch: 'Fab',
        git: [
            link = 'https://github.com/'
        ],
        referby: "Vel",
        location: 'Thippanampatti',
        placement: 'Yes'
    }
]

// check array length
var x = (tableObject).length;
// console.log(x);

// append td in table
var y;
var tableRow = document.createElement('tr');
function tableData() {
    for (i = 0; i < tableObject.length; i++) {
        tableRow = document.createElement('tr');
        for (j = 0; j < Object.keys(tableObject[i]).length; j++) {
            if (j == 5) {
                var linkEle = document.createElement('a');
                linkEle.setAttribute('href', tableObject[i].git);
                linkEle.setAttribute('target', 'blank');
                linkEle.innerHTML = 'Link';
                placementRow.appendChild(linkEle);
                y = a.splice(4, 0, linkEle);
            }
            var a = [tableObject[i].img, tableObject[i].name, tableObject[i].mobile, tableObject[i].batch, "", tableObject[i].referby, tableObject[i].location, tableObject[i].placement];
            var placementRow = document.createElement('td');
            placementRow.innerHTML = a[j];
            tableRow.appendChild(placementRow);
            table.appendChild(tableRow);
        }
    }
}
tableData();
