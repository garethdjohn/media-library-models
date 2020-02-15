import 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Source, SourceScan, SourceFile } from '../src/index';
import mongoose from 'mongoose';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Source', function() {
    it('validation fails if name and path are not set', async function() {
        const source = new Source();
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation fails if name is not set', async function() {
        const source = new Source({ path: '/path/to/the/thing' });
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation fails if path is not set', async function() {
        const source = new Source({ name: 'Generic Source Name' });
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation succeeds if name and path are set', async function() {
        const source = new Source({ name: 'Generic Source Name', path: '/path/to/the/thing' });
        await expect(source.validate()).to.be.fulfilled;
    });
});

describe('SourceScan', function() {
    it('validation fails if sourceId and jobId are not set', async function() {
        const source = new SourceScan();
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation fails if jobId is not set', async function() {
        const source = new SourceScan({ sourceId: '5e41dd48466f990eb07370da' });
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation fails if sourceId is not set', async function() {
        const source = new SourceScan({ jobId: 'abcd-efgh' });
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation succeeds if sourceId and jobId are set', async function() {
        const source = new SourceScan({ sourceId: '5e41dd48466f990eb07370da', jobId: 'abcd-efgh' });
        await expect(source.validate()).to.be.fulfilled;
    });
});

describe('SourceFile', function() {
    it('validation fails if path and sourceId are not set', async function() {
        const source = new SourceFile();
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation fails if path is not set', async function() {
        const source = new SourceFile({ sourceId: '5e41dd48466f990eb07370da' });
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation fails if sourceId is not set', async function() {
        const source = new SourceFile({ path: '/path/to/the/thing' });
        await expect(source.validate()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });

    it('validation succeeds if path and sourceId are set', async function() {
        const source = new SourceFile({ path: '/path/to/the/thing', sourceId: '5e41dd48466f990eb07370da' });
        await expect(source.validate()).to.be.fulfilled;
    });
});