import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import Marker from '@editorjs/marker';
import Image from '@editorjs/image';
import axios from 'axios';
import LinkTool from '@editorjs/link';
import Quote from '@editorjs/quote';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';

export const EDITOR_JS_TOOLS = {
  header: Header,
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile(file) {
          let data = new FormData();
          data.append('files', file, file.fileName);
          console.log(data);
          return axios
            .post('http://localhost:1337/upload', data)
            .then((res) => {
              return {
                success: 1,
                file: {
                  url: `http://localhost:1337${res.data[0].url}`,
                },
              };
            })
            .catch((err) => console.log(err.message));
        },
      },
    },
  },
  linkTool: LinkTool,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
