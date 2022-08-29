// клиентское API
// создадим асинхронную константу client (базовый вариант клиента)
export const client = async (endPoint, {body, ...customConfig}) => {
    // на входе ждем точку входа endPoint
    // также ждем объект настроек, в котором проверяем наличие боди и спредим все остальное
    // обычно, когда идет работа с асинхронными запросами есть объект заголовков
    const headers = {
        // в базовом варианте храним здесь Content-Type, который будем передавать во все запросы
        "Content-Type": "aplication/json",
    }

    // для фетча подготовим конфиг
    const config = {
        // определим метод в зависимости от наличия боди, если есть то пост, если нет то гет
        method: body ? 'POST' : 'GET',
        // также перезапишем кастомный конфиг, спредим его сюда
        ...customConfig,
        // также переопределяем заголовки
        headers: {
            // спредим базовые
            ...headers,
            // и если пользователь добавил дополнительные кастомные, то добавляем и их
            ...customConfig.headers,
        },
    }

    // если у нас есть боди, то нужно его подготовить к отправке на сервер (перевести в json)
    if (body) {
        config.body = JSON.stringify(body);
    }

    // дальше делаем трай кетч, с попыткой сделать синхронную операцию
    try {
        // создадим переменную которая ожидает ответ от сервера по адресу endPoint
        // и с тем конфигом, который мы создали
        const response = await fetch(endPoint, config);

        // если ответ (response) плохой, т.е не ok
        // то дадим приложению об этом знать, бросим ошибку 'failed to fetch'
        if (!response.ok) throw new Error ('failed to fetch');

        // если все ок от сервера, то загружаем полученные данные и возвращаем их во внешний мир
        const data = await response.json();
        return data;
    } catch(err) {
        // ждем ошибку
        // если мы выбросили ошибку от сервера 'failed to fetch' то мы должны ее обработать
        // путем того, что возвращаем промис.реджект c полученой ошибкой
        return Promise.reject(err.message);
    }
};


// также, дополнительно, в абстракции можно создать методы клиента

client.get = function(endPoint, customConfig = {}) {
    // на входе урл и кастом конфиг
    // на выходе вызываем клиента и передаем ему их
    return client(endPoint, customConfig);
}

client.post = function(endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body});
}

client.delete = function(endPoint, customConfig = {}) {
    return client(endPoint, {...customConfig, method: 'DELETE'});
}

client.putch = function(endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body, method: 'PUTCH'});
}
