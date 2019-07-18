/*
 *   Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import React, { Fragment } from 'react';
import {
  FormikFieldText,
  FormikSelect,
  FormikFieldNumber,
} from '../../../../components/FormControls';
import { Formik } from 'formik';

const protocolOptions = [{ value: 'HTTPS', text: 'HTTPS' }, { value: 'HTTP', text: 'HTTP' }];
const initialValues = {
  url: '',
  scheme: 'HTTPS',
  host: 'localhost',
  port: 9200,
  path: '',
};
const URLInfo = () => {
  return (
    <Formik
      initialValues={initialValues}
      render={({}) => (
        <Fragment>
          <FormikFieldText
            name="url"
            formRow
            rowProps={{
              label: 'URL',
              style: { paddingLeft: '10px' },
            }}
          />
          <FormikSelect
            name={`scheme`}
            formRow
            rowProps={{
              label: 'Type',
              style: { paddingLeft: '10px' },
            }}
            inputProps={{
              options: protocolOptions,
            }}
          />
          <FormikFieldText
            name="host"
            formRow
            rowProps={{
              label: 'Host',
              style: { paddingLeft: '10px' },
            }}
          />
          <FormikFieldNumber
            name="port"
            formRow
            rowProps={{
              label: 'Port',
              style: { paddingLeft: '10px' },
            }}
          />
          <FormikFieldText
            name="path"
            formRow
            rowProps={{
              label: 'Path',
              style: { paddingLeft: '10px' },
            }}
          />
        </Fragment>
      )}
    />
  );
};

export default URLInfo;
