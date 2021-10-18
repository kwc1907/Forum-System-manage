import request from '@/utils/request'

export function getTip(page, size) {
    return request({
      url: '/manageTip/getAll',
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }
  export function deleteOne(id) {
    return request({
      url: `/manageTip/deleteOne/${id}`,
      method: 'delete',
    })
  }

  export function insertOne(data) {
    return request({
      url: '/manageTip/insertOne',
      method: 'post',
      data: data
    })
  }