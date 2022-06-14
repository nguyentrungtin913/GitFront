import qs from "query-string";
import axiosService from "./../commons/axiosService";
import { API_URL, TOKEN_TELEGRAM, CHAT_ID } from "./../constants";
import { toastError } from "../helpers/toastHelper";

const url = "products";

export const getListProduct = (params = {}) => {
  let queryParams = "?with[]=productType&sortBy=id&sortType=desc";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_URL}/${url}${queryParams}`).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

export const addProduct = product => {
  return axiosService.post(`${API_URL}/product`, product.product).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};
export const updateProduct = product => {
  return axiosService.put(`${API_URL}/product`, product.product).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};
export const deleteProduct = productId => {
  return axiosService
    .delete(`${API_URL}/product?id=${productId}`)
    .catch(err => {
      if (err.response.data[0]) {
        toastError(err.response.data[0].clientMsg);
      }
      console.log(err.response.data);
    });
};

export const sell = data => {
  return axiosService.post(`${API_URL}/order`, data.params).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

export const buy = data => {
  return axiosService.post(`${API_URL}/order-buy`, data.params).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

export const getListProductSoldOut = () => {

  return axiosService.get(`${API_URL}/products-sold-out?with[]=productType`).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

////////////////////////////
//seller
export const getListProductCustomer = (params = {}) => {
  let queryParams = "products-customer?with[]=productType&sortBy=id&sortType=desc";
  return axiosService.get(`${API_URL}/${queryParams}`).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

export const getListProductByProType = (proType) => {
  let queryParams = "products-by-pro-type?proType=" + proType;
  return axiosService.get(`${API_URL}/${queryParams}`).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

export const getListProductByArrId = (params) => {
  let queryParams = "products-by-id";
  return axiosService.post(`${API_URL}/${queryParams}`, params).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

export const customerBuy = (params) => {
  let queryParams = "customer-buy";
  let message = "Tên: "+params.name+" \nSdt: "+params.phone;
  let arr = params.arr;
  let images=[];
  if(arr.length>0){
    arr.forEach(element => {
      let value = element.split(":");
      images.push(value[0]);
    });
  }
  if(sendMessage(message)){
    sendImages(images);
  }
  
  return axiosService.post(`${API_URL}/${queryParams}`, params).catch(err => {
    if (err.response.data[0]) {
      toastError(err.response.data[0].clientMsg);
    }
    console.log(err.response.data);
  });
};

function sendImages(images = []) {
  console.log(images)
  if (images.length > 0) {
    let media = [];
    images.forEach(element => {
      media.push({
        "type": "photo",
        "media": `${API_URL}/image/product/${element}`
      })
    });
    console.log(media)
    axiosService.post(`https://api.telegram.org/bot${TOKEN_TELEGRAM}/sendMediaGroup`,
      {
        chat_id: CHAT_ID,
        parse_mode: 'markdown',
        media: media
      })
      .then(response => {
        console.log(response);
        return true;
      })
      .catch(error => {
        console.log(error);
      })
  }
  return false;
}

function sendMessage(message = "") {
  if(message!==""){
    let data = {
      chat_id: CHAT_ID,
      parse_mode: 'markdown',
      text: message
    };
    axiosService.post(`https://api.telegram.org/bot${TOKEN_TELEGRAM}/sendMessage`, data).catch(err => {
      console.log(err.response.data);
      return false;
    });
  }
  return true;
}