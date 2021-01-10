const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // forEach
    //   for(let i = 0; i<companies.length; i++){
    //       console.log(companies[i]);
    //   }

    // companies.forEach(function(company){
    //     console.log(company);
    // });

    // companies.forEach((company)=> console.log(company.name))
    

    
    
// filter
    // let canDrink = [];
    //  for(let i = 0 ; i<ages.length ; i++){
    //    if(ages[i]>=21){
    //      canDrink.push(ages[i]);
    //    }
    //  }

    // const canDrink = ages.filter(function(age){
    //   if(age>=21){
    //     return true;
    //   }
    // });

    // const canDrink = ages.filter( age=> age>=21 );


    // Filter Retail Companies
    // const retailCompanies = companies.filter(function(company){
    //   if(company.category === 'Retail'){
    //     return true;
    //   }
    // });

    // const retailCompanies = companies.filter(company => company.category === 'Retail');

// map
  // Create array of company names
  // const companyName = companies.map(function(company){
  //   return company.name;
  // });

  // const companyName = companies.map(company =>  company.name);

  // console.log(companyName);

  // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}}]`);

  // const ageSqrt = ages.map(age => Math.sqrt(age));

  // const ageMap = ages
  // .map(age => Math.sqrt(age))
  // .map(age => age*2);


// sort
  // Sort Companies by Start Year
  // const sortedCompanies = companies.sort(function(c1,c2){
  //   if(c1.start > c2.start){
  //     return 1;
  //   }else{
  //     return -1;
  //   }
  // });

  // const sortedCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1: -1)

  // Sort Ages
  // const sortedAge = ages.sort(function(a, b){
  //   if(a > b){
  //     return 1;
  //   }else{
  //     return -1;
  //   }
  // });
  // console.log(sortedAge);
  // const sortedAge = ages.sort((a,b) => a - b);  // Sort Ages
  // const sortedAge = ages.sort((a,b) => a - b);
  // console.log(sortedAge);


  // reduce

  // let ageSum = 0;

  // for(let i=0 ; i<ages.length ; i++){
  //   ageSum+=ages[i];
  // }

  // ages.forEach(age => ageSum+=age);

  // const ageSum = ages.reduce((total,age) => total+age , 0);
  // console.log(ageSum);

  // Get Total Years for all company
  // const companyYears = companies.reduce((total,company) => total + (company.end-company.start) , 0);


// Combine Methods

  // const ageMethod = ages
  //   .map(age => age*2)
  //   .filter(age => age>=40)
  //   .sort((a,b) => a-b)
  //   .reduce((total,age) => total + age, 0)

    
 