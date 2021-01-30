db.title1.forEach(title1 => {
    console.log(title1.title);
    
    let title2Fk = db.title2.filter(title2 => title2.fk == title1.id);
    title2Fk.forEach(title2 => {
        console.log(`--> ${title2.title}`)
    
        let title3Fk = db.title3.filter(title3 => title3.fk == title2.id);
        title3Fk.forEach(title3 => {
            console.log(`-------> ${title3.title}`)
    
            let descriptionFk = db.description.filter(desc => desc.fk == title3.id);
            descriptionFk.forEach(desc => console.log(desc.script));
        })
    })

});