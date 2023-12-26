import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('post/index');
}
function getById(id)
{
    return httpAxios.get(`post/show/${id}`);
}
function create(data)
{
    return httpAxios.post('post/store', data);
}
function update(data,id)
{
    return httpAxios.post(`post/update/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`post/destroy/${id}`);
}
const PostService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default PostService;