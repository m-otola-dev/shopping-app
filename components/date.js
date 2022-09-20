import React from 'react';

function CurDate(){
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <footer>
            Modified on {date}. <cite>&copy; 2022 Omotola Anibaba</cite>.
          </footer>
    );
}

export default CurDate; 