import {
  URLS
} from './urls';

import {
  mixed,
  object,
  boolean,
  array,
  string,
  number,
  date,
  lazy
} from 'yup';

// export const PARTIES_MOCK_SCHEMA = {
//   GET_PARTIES: {
//     url: URLS.PARTIES.GET_PARTIES,
//     method: 'get',
//     schema: array().of(
//       object().shape(
//         {
//           id: string().required(),
//           name: string().required(),
//           startDate: string().required(),
//           startTime: mixed(),
//           host: string().required(),
//           status: string().required(),
//           partyStatus: string().required(),
//           transfered: mixed(),
//           hostId: mixed(),
//           type: mixed()
//         }
//       )
//     ),
//     query: `res.data[].{
//         id: id,
//         name: name,
//         startDate: startDate,
//         startTime: startTime,
//         host: host,
//         status: status,
//         partyStatus: partyStatus,
//         transfered: transfered,
//         hostId: hostId,
//         type: type
//     }`
//   }
// }
