import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('category/index');
}
function getById(id)
{
    return httpAxios.get(`category/show/${id}`);
}
function create(data)
{
    return httpAxios.post('category/store', data);
}
function update(data,id)
{
    return httpAxios.post(`category/update/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`category/destroy/${id}`);
}
function getCategoryByParentId(parent_id) {
    return httpAxios.get(`category_list/${parent_id}`);
}
function getBySlug(slug)
{
    return httpAxios.get("category/show/"+slug);
}
const CategoryService = {
    getCategoryByParentId:getCategoryByParentId,
    getBySlug:getBySlug,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default CategoryService;