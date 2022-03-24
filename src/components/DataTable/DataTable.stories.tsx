import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DataTable, DataTableProps } from './DataTable'

export default {
  title: 'v1/DataTable',
  component: DataTable
} as ComponentMeta<typeof DataTable>

const Template: ComponentStory<typeof DataTable> = (args: DataTableProps) => <DataTable {...args} />

const objData = [
  {
    titulo_1: 'Valor 11',
    titulo_2: 'Valor 12',
    titulo_3: 'Valor 13'
  },
  {
    titulo_1: 'Valor 21',
    titulo_2: 'Valor 22',
    titulo_3: 'Valor 23'
  },
  {
    titulo_1: 'Valor 31',
    titulo_2: 'Valor 32',
    titulo_3: 'Valor 33'
  },
  {
    titulo_1: 'Valor 41',
    titulo_2: 'Valor 42',
    titulo_3: 'Valor 43'
  },
  {
    titulo_1: 'Valor 51',
    titulo_2: 'Valor 52',
    titulo_3: 'Valor 53'
  }
]

export const Default = Template.bind({})
Default.args = {
  data: objData,
  enableCheckbox: true,
  enablePaginator: true,
  header: [
    {
      field: 'titulo_1',
      label: 'Titulo 1',
      type: 'string'

    },
    {
      field: 'titulo_2',
      label: 'Titulo 2',
      type: 'string'
    },
    {
      field: 'titulo_3',
      label: 'Titulo 3',
      type: 'string'
    }
  ],
  labelFromTo: 'de',
  labelItemPerPage: 'Item por página',
  numPerPage: [10, 25, 50],
  totalCount: 50
}