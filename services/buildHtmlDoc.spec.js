import test from 'tape';
import buildDoc from './buildHtmlDoc';

test('building a document; valid params', function (t) {

    // ARRANGE
    t.plan(2);
    const content = '<h2>Here\'s Johnny!</h2>';
    const name = 'The Shining';

    // ACT
    const myDoc = buildDoc(name, content);

    // ASSERT
    const nameIsInDoc = myDoc.includes(name);
    const contentIsInDoc = myDoc.includes(content);

    nameIsInDoc ? t.pass('Name is in document!') : t.fail('No name!');
    contentIsInDoc ? t.pass('Content is in document!') : t.fail('No content!');

    t.end();
});