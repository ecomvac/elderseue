import { Column } from '@ant-design/plots';
import React from 'react';

const MemberChat = () => {
    const data = [
       {
        id:'01',
        age:10,
        name:'Khan',
        title:'Child'
       },
       {
        id:'02',
        age:50,
        name:'Sahed Khan',
        title:'Elderly'
       },
       {
        id:'03',
        age:20,
        name:'Ddjd',
        title:'Adult'
       },
       {
        id:'04',
        age:28,
        name:'Rahim',
        title:'Adult'
       },
       {
        id:'05',
        age:20,
        name:'Karim',
        title:'Adult'
       },
       {
        id:'06',
        age:85,
        name:'Rahima',
        title:'Elderly'
       },
       {
        id:'07',
        age:25,
        name:'Sahed Khan',
        title:'Adult'
       },
       {
        id:'08',
        age:20,
        name:'Bikash',
        title:'Adult'
       },
       {
        id:'09',
        age:40,
        name:'Kdin',
        title:'Adolescent'
       },
       {
        id:'10',
        age:35,
        name:'Sahed Khan',
        title:'Adolescent'
       },
      
        
      ];
      const config = {
        data,
        xField: 'id',
        yField: 'age',
        // xAxis: {
        //   label: {
        //     autoHide: true,
        //     autoRotate: false,
        //   },
        // },
       
        // meta: {
        //   type: {
        //     alias: '类别',
        //   },
        //   sales: {
        //     alias: '销售额',
        //   },
        // },
        minColumnWidth: 10,
        maxColumnWidth: 10,
      };
    return (
        <div>
            <Column {...config} />
        </div>
    );
};

export default MemberChat;