import {Link} from 'react-router-dom';

function TopCategories({categories}) {
    const data = categories.item;

    var items = data.map((item) => {
        var entries = Object.entries(item);
        return (
            
            <Link to={`category/${entries[0][1]}`} key={entries[0][1]}>
                <div className="container-fluid border border-2 border-primary w-100 mt-2" key={entries[0][1]}>
                    {
                        entries.map(data => {
                            return (
                                    <h3 key={data[0]}> 
                                        <span className='text-danger'>
                                            {data[0].toUpperCase()}
                                        </span>
                                        <span className='text-dark'>
                                            : {data[1]}
                                        </span>
                                    </h3>
                                );
                            })
                        }
                </div>
            </Link>
        );
    });

    return items;
}


export default TopCategories;