import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';




const Datatable = () => {
    const products = [
        { code: 'f230fh0g3', name: 'Bamboo Watch', category: "Accessories" , quantity:24 },
        { code: "nvklal433", name: 'Black Watch', category: "Accessories"  , quantity:23 },
        { code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness' , quantity:54 },
        { code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing' , quantity:34 },
        { code: 'h456wer53', name: 'Bracelet', category: 'Accessories' , quantity:30 },
        { code: "nvklal433", name: 'Black Watch', category: "Accessories"  , quantity:23 },
        { code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing' , quantity:34 },
        { code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness' , quantity:54 }
        
    ];

    const customHeaderTemplate = (header) => (
        <div className=" p-2">{header}</div>
    )

    return (
        <div className=" sm:overflow-y-scroll ">
          
           <DataTable value={products} showGridlines tableStyle={{ }}  className="w-full border-2 border-gray-400 rounded-lg lg:text-xl text-lg ">
    <Column field="code" header={customHeaderTemplate('Code')} 
    className="border-2 border-b-0 border-s-0 border-gray-400 p-2 ps-2"></Column>

    <Column field="name" header={customHeaderTemplate('Name')} 
    className='border-2 border-gray-400 p-2 border-b-0'></Column>

    <Column field="category" header={customHeaderTemplate('Category')} className='border-2 border-gray-400 p-2 border-b-0'></Column>

    <Column field="quantity" header={customHeaderTemplate('Quantity')}className='border-2 border-e-0 border-gray-400 p-2 border-b-0'></Column>
            </DataTable> 
        </div>
    );
};

export default Datatable;