//comparing arrays
function compareArrays(array_a,array_b)
{
    if(!Array.isArray(array_a) || !Array.isArray(array_b))
    {
        //these objects are null
        return false;
    }
    else if(array_a ==  array_b)
    {
        return true;
    }
    else if(array_a.length !== array_b.length)
    {
        return false;
    }
    else
    {
        for(let i=0;i<array_a.length; ++i)
        {
            if(array_a[i] !== array_b[i]) return false;
        }
        return true;
    }

}

const counties = ['meru','nairobi','isiolo'];
const tribes = ['ameru','agikuyu','masai'];

console.log(compareArrays(counties,tribes));