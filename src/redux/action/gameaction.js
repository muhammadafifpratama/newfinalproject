import { mysqlapi } from '../../helper/url';
import axios from 'axios';

export const kirimid = (data) => {
    return {
        type: 'click',
        payload: data
    }
}
