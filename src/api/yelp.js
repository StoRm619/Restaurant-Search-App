import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer owcxdMydiAFtN0Cf-wf-GXbxZjlTcdwM317fftryTo1Msy-VxKjfMWP9-Qm-L8y7-GyPawQQla8ICdoqlY8oHEUWKPC7vjBNLIuVLVAk-gSV7k2wccsQIuUJLo_-X3Yx'
    }
});
