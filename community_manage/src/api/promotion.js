import request from '@/utils/request'

export function getPromotion(page, size) {
    return request({
      url: '/managePromotion/getAll',
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }
  export function deleteOne(id) {
    return request({
      url: `/managePromotion/deleteOne/${id}`,
      method: 'delete',
    })
  }

  export function insertOne(data) {
    return request({
      url: '/managePromotion/insertOne',
      method: 'post',
      data: data
    })
  }