import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import PostService from '../../../services/PostService';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function () {
            await PostService.getAll().then(function (result) {
                setPosts(result.data.post);
            });
        })();

    }, [statusdel]);
    function PostDelete(id) 
    {
        PostService.remove(id).then(function(result) {
        alert(result.data.message)
        setStatusDel(result.data.id);

    });
}


    /* const Brands=[
         {id:"1",name:"Việt Nam", slug:'viet-nam'},
         {id:"2",name:"Hàn Quốc", slug:'han-quoc'},
         {id:"3",name:"Thái Lan", slug:'thai-lan'},
     ];*/
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ POST</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/post/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            <th className='text-center' style={{ width: 120 }}>Hình</th>
                            <th>Topic_id</th>
                            <th>title</th>
                            <th>slug</th>
                            <th>detail</th>
                            <th>type</th>
                            <th>metakey</th>
                            <th>metadesc</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <img className="img-fluid" src={urlImage+"post/"+post.image} alt={post.image} />
                                <td>{post.topic_id}</td>
                                <td>{post.title}</td>
                                <td>{post.slug}</td>
                                <td>{post.detail}</td>
                                <td>{post.type}</td>
                                
                                <td>{post.metakey}</td>
                                <td>{post.metadesc}</td>
                                <td className='text-center'>{post.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/post/update/${post.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/post/show/${post.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>PostDelete(post.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{post.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default PostList;