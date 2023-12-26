import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import SliderService from "../../../services/SliderService";

function SliderList(){
    const [sliders, setSliders] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function () {
            await SliderService.getAll().then(function (result) {
                setSliders(result.data.sliders);
            });
        })();

    }, [statusdel]);
    function SliderDelete(id) {
        SliderService.remove(id).then(function(result) {
        alert(result.data.message)
        setStatusDel(result.data.id);

    });
}
    
    return(<>
    
    <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ SLIDER</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/slider/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            <th className='text-center' style={{ width: 120 }}>Hình</th>
                            <th>Tên</th>
                            <th>link</th>
                            <th>Sort_order</th>
                            <th>position</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders.map((slider, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <img className="img-fluid" src={urlImage+"slider/"+slider.image} alt={slider.image} />
                                <td>{slider.name}</td>
                                <td>{slider.link}</td>
                                <td>{slider.sort_order}</td>
                                <td>{slider.position}</td>
                                <td className='text-center'>{slider.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/slider/update/${slider.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/slider/show/${slider.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>SliderDelete(slider.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{slider.id}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    </>)
}
export default SliderList;