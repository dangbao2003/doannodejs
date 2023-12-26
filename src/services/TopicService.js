import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('topic/index');
}
function getById(id)
{
    return httpAxios.get(`topic/show/${id}`);
}
function create(data)
{
    return httpAxios.post('topic/store', data);
}
function update(data,id)
{
    return httpAxios.post(`topic/update/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`topic/destroy/${id}`);
}
const TopicService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default TopicService;