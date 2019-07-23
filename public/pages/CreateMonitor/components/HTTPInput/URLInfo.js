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
  FormikFieldRadio,
} from '../../../../components/FormControls';
import { hasError, isInvalid } from '../../../../utils/validate';
import { URL_TYPE } from '../../../Destinations/containers/CreateDestination/utils/constants';
import { Formik } from 'formik';

const protocolOptions = [{ value: 'HTTPS', text: 'HTTPS' }, { value: 'HTTP', text: 'HTTP' }];

const initialValues = {
  url: '',
  scheme: 'HTTP',
  host: 'localhost',
  port: 9200,
  path: '',
};

const URLInfo = () => {
  let isUrlEnabled = true;
  return (
    <Formik
      render={() => (
        <Fragment>
          <FormikFieldRadio
            name={`urlType`}
            formRow
            rowProps={{
              style: { paddingLeft: '10px' },
            }}
            inputProps={{
              id: 'fullUrl',
              value: URL_TYPE.FULL_URL,
              checked: isUrlEnabled,
              label: 'Define endpoint by URL',
              onChange: (e, field, form) => {
                // Clear Full URL if user switched to custom URL
                form.setFieldTouched(`url`, false, false);
                form.setFieldValue(`url`, '');
                isUrlEnabled = true;
                field.onChange(e);
              },
            }}
          />
          <FormikFieldText
            name="url"
            formRow
            rowProps={{
              label: 'URL',
              style: { paddingLeft: '10px' },
              isInvalid,
              error: hasError,
            }}
            inputProps={{
              disabled: !isUrlEnabled,
              isInvalid,
            }}
          />
          <FormikFieldRadio
            name={`urlType`}
            formRow
            rowProps={{
              style: { paddingLeft: '10px' },
            }}
            inputProps={{
              id: 'customUrl',
              value: URL_TYPE.ATTRIBUTE_URL,
              checked: !isUrlEnabled,
              label: 'Define endpoint by custom attributes URL',
              onChange: (e, field, form) => {
                form.setTouched({
                  scheme: false,
                  host: false,
                  port: false,
                  path: false,
                });
                form.setValues(initialValues);
                isUrlEnabled = false;
                field.onChange(e);
              },
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
              disabled: isUrlEnabled,
              options: protocolOptions,
            }}
          />
          <FormikFieldText
            name="host"
            formRow
            rowProps={{
              label: 'Host',
              style: { paddingLeft: '10px' },
              isInvalid,
            }}
            inputProps={{
              disabled: isUrlEnabled,
              isInvalid,
            }}
          />
          <FormikFieldNumber
            name="port"
            formRow
            rowProps={{
              label: 'Port',
              style: { paddingLeft: '10px' },
              isInvalid,
            }}
            inputProps={{
              disabled: isUrlEnabled,
              isInvalid,
            }}
          />
          <FormikFieldText
            name="path"
            formRow
            rowProps={{
              label: 'Path',
              style: { paddingLeft: '10px' },
              isInvalid,
            }}
            inputProps={{
              disabled: isUrlEnabled,
              isInvalid,
            }}
          />
        </Fragment>
      )}
    />
  );
};

export default URLInfo;
