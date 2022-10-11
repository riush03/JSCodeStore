document.addEventListener("DOMContentLoaded",()=>{
    //find the table_of_content element if none create one
    let table_of_content = document.querySelector("#table_of_content");
    if(!table_of_content)
    {
        table_of_content = document.createElement("div");
        table_of_content.id = "table_of_content";
        document.body.prepend(table_of_content);
    }
    //find all the section heading elements
    let headings = document.querySelectorAll("h2,h3,h4,h5,h6");

    //intialize an array that keeps the track of section numbers
    let section_numbers = [0,0,0,0,0];

    //loop through the section header elements found
    for(let heading of headings)
    {
        //skip the heading if it is inside the table_of_content container
        if(heading.parentNode === table_of_content)
        {
            continue;
        }
        //figure out what heading it is for h2 level1-1
        let level = parseInt(heading.tagName.charAt(1)) -1;

        section_numbers[level-1]++;
        for(let i = level; i<section_numbers.length; i++)
        {
            section_numbers[i] = 0;
        }

        let section_number = section_numbers.slice(0,level).join(".");

        let span = document.createElement("span");
        span.className = "toc_sec_num";
        span.textContent = section_number;
        heading.prepend(span);

        let anchor = document.createElement("a");
        let fragmentName = 'table_of_content${section_number}';
        anchor.name = fragmentName;

        heading.before(anchor);
        anchor.append(heading);

        //create a link to this section
        let link = document.createElement("a");
        link.href = '#${fragmentName}'; //link destination

        link.innerHTML = heading.innerHTML;

        let entry = document.createElement("div");
        entry.classList.add("toc_entry",'toc_level${level}');
        entry.append(link);
        table_of_content.append(entry);
    }
});