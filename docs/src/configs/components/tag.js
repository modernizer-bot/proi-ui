import { columns } from '../shared/columns';

export const data = [
  {
    property: 'color',
    description: 'Color of the tag',
    type: '<code>string</code>',
    default: '<code>#2398ab</code>'
  },
  {
    property: 'outlined',
    description: 'Whether the tag is outlined',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: 'Class name of tag container. <br /> Tag component uses <code>.sd-tag</code> class',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  }
];

export const usage = `<script>
import { Tag } from 'proi-ui';
</script>

<Tag>Tag</Tag>
<Tag outlined>Tag</Tag>
`;

export const config = { title: 'Tag component', usage, data, columns };
