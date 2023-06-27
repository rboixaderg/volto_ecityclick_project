import React from 'react';
import { Field, FormFieldWrapper } from '@plone/volto/components';

const fields = {
  unitField: {
    title: 'Unit',
    columns: 2,
    placeholder: 'Unit',
    defaultValue: 'px',
    choices: [
      ['px', 'px'],
      ['%', 'percentage'],
      ['em', 'em'],
      ['rem', 'rem'],
    ],
  },
};

const getMax = (unit) => {
  switch (unit) {
    case '%':
      return 100;
    case 'px':
      return 100;
    case 'em':
      return 24;
    case 'rem':
      return 24;
    default:
      return 10;
  }
};

export const QuadSizeWidget = (props) => {
  const {
    value = {},
    id,
    onChange,
    sliderSettings = {
      max: 12,
      min: 0,
      step: 1,
      start: 0,
    },
  } = props;
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    unit = 'px',
    unlock = false,
  } = value;
  const settings = {
    ...sliderSettings,
    max: getMax(unit),
  };
  // console.log('value', value);

  return (
    <FormFieldWrapper {...props}>
      <Field
        columns={2}
        id={`${id}-unit`}
        {...fields.unitField}
        onChange={(fid, val) => onChange(id, { ...value, unit: val })}
        value={value.unit || 'px'}
      />

      {unlock ? (
        <>
          <Field
            onChange={(fid, val) => {
              onChange(id, { ...value, top: val });
            }}
            value={top}
            columns={2}
            title="Top"
          />
          <Field
            onChange={(fid, val) => {
              onChange(id, { ...value, left: val });
            }}
            value={left}
            columns={2}
            title="Left"
          />
          <Field
            onChange={(fid, val) => {
              onChange(id, { ...value, right: val });
            }}
            value={right}
            columns={2}
            title="Right"
          />
          <Field
            onChange={(fid, val) => {
              onChange(id, { ...value, bottom: val });
            }}
            value={bottom}
            columns={2}
            title="Bottom"
          />
        </>
      ) : (
        <Field
          id={`${id}-slider`}
          settings={settings}
          onChange={(fid, val) => {
            onChange(id, {
              ...value,
              top: val,
              left: val,
              bottom: val,
              right: val,
            });
          }}
          value={top}
          title="Size"
          columns={2}
        />
      )}

      <Field
        id={`${id}-lockSize`}
        onChange={(fid, val) => onChange(id, { ...value, unlock: val })}
        value={unlock}
        title="Customize"
        type="boolean"
        columns={1}
      />
    </FormFieldWrapper>
  );
};
