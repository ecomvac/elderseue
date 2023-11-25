import { Column } from '@ant-design/plots';
import React from 'react';

const MemberChat = () => {
    const data = [
       {
        id:1,
        age:10,
        name:'Khan',
        title:'Child'
       },
       {
        id:2,
        age:50,
        name:'Sahed Khan',
        title:'Elderly'
       },
       {
        id:3,
        age:20,
        name:'Ddjd',
        title:'Adult'
       },
       {
        id:4,
        age:10,
        name:'Rahim',
        title:'Child'
       },
       {
        id:5,
        age:20,
        name:'Karim',
        title:'Adult'
       },
       {
        id:6,
        age:85,
        name:'Rahima',
        title:'Elderly'
       },
       {
        id:7,
        age:30,
        name:'Sahed Khan',
        title:'Adolescent'
       },
       {
        id:8,
        age:20,
        name:'Bikash',
        title:'Adult'
       },
       {
        id:9,
        age:40,
        name:'Kdin',
        title:'Adolescent'
       },
       {
        id:10,
        age:10,
        name:'Sahed Khan',
        title:'Child'
       },
      
        
      ];
      const config = {
        data,
        xField: 'id',
        yField: 'age',
        columnWidthRatio: 0.8,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额',
          },
        },
      };
    return (
        <div>
            <Column {...config} />
        </div>
    );
};

export default MemberChat;